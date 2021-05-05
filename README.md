# Docker compose logs to splunk using fluentd

A dummy app/ to log on STDOUT and use fluentd to collect them and send it to Splunk with HEC plugin on docker compose.

To start
```
make
```

See logs in splunk in [http://localhost:8000](http://localhost:8000/en-US/app/search/search?q=index=*)
- user: admin
- pass: admin1234
