# AWS-Cloud-Resume-Challenge

The [cloud resume challenge](https://cloudresumechallenge.dev/) is a challenge by [Forrest Brazeal](https://twitter.com/forrestbrazeal) to help people to get started in the cloud industry.  

Companies of all sizes and industries use cloud technologies to boost efficiency, agility, and creativity. I prepared for [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) in 2023. AWS Certifications prove cloud computing expertise. I hoped these qualifications would increase my professional credibility, open new career doors, and help me flourish in my present work promoting AWS's value proposition. These certificates demonstrate my curiosity and drive to progress.


## Architecture

![Architecture Diagram](https://file.notion.so/f/f/6c0da47d-0ecd-43be-af30-cfa44ecc34ee/a359de65-2de9-49a8-9f20-ac2288e2787a/Untitled.png?id=382d99b3-3bf2-4d8c-95cb-9e8f3018c064&table=block&spaceId=6c0da47d-0ecd-43be-af30-cfa44ecc34ee&expirationTimestamp=1701907200000&signature=uZxe4SdS9VVzAH7uBh5YtfwS56X9hJHuQ5ZNylBTsNA&downloadName=Untitled.png)

## Overview

1. **User Requests Website:**
   - 👧 Alice initiates a request for the website in her browser.

2. **DNS Resolution and Route53:**
   - 🔄 DNS Resolver locates Amazon's nameservers and queries A records in Route53.

3. **CloudFront and S3 Buckets:**
   - 🌍 A records map to CloudFront, which routes traffic to S3 buckets.

4. **Static Webpage Hosting:**
   - 📦 S3 bucket www. redirects traffic to an S3 bucket hosting a static webpage.
   - DNS Resolver returns the request to the DNS client, and the webpage loads.

5. **API Gateway and JavaScript Interaction:**
   - 🖥️ JS code on the website calls an API hosted on API Gateway.

6. **Serverless Processing with Lambda:**
   - 🚀 The API triggers a Python Lambda function.

7. **Logging and Data Storage:**
   - 📊 Lambda function sends logs to CloudWatch.
   - Updates visitor count on DynamoDB and retrieves the updated visitor count.

8. **User-Friendly Metrics:**
   - 📈 The updated visitor count is reflected on the website.





## Detailed Blog 
[Cloud Resume Challenege](https://nishantgautam.notion.site/Cloud-Resume-Challenge-e1817d780cc14d8c91dc7d2b642e0d57?pvs=4)
