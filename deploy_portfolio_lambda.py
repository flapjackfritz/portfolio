import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
  try:
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-2:784236863444:deploy_portfolio_topic')

    portfolio_bucket = s3.Bucket('portfolio.tommyfritz.com')
    build_bucket = s3.Bucket('staging.tommyfritz.com')

    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as zipped_portfolio:
      for name in zipped_portfolio.namelist():
        obj = zipped_portfolio.open(name)
        portfolio_bucket.upload_fileobj(obj, name)
        portfolio_bucket.Object(name).Acl().put(ACL='public-read')

    print "Job Done!"
    topic.publish(Subject="Portfolio Deployed", Message="The portfolio deployed successfully.")

  except:
    topic.publish(Subject="Portfolio Deploy Failed", Message="The portfolio was not deployed successfully.")
    raise