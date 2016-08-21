---
title: AWS S3, Route 53, and Namecheap
---

- buy a domain name

- push your HTML and other static assets to an S3 bucket
    - bucket name must match your domain name
    - files must be made public
    - set up IAM user to let yourself push files from awscli

- create a Route 53 Hosted Zone for your domain
    - copy the name servers over to Namecheap's "custom dns" section IN THE EXACT ORDER
        - mess it up and you get some lame nginx errors =\


