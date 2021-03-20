# Docker compose logs to splunk using fluentd

A dummy app/ to log on STDOUT, using docker compose to enable fluentd to collect this logs and send it to Splunk with HEC plugin.

To start
```
make
```

See logs in splunk in http://localhost:8000/en-US/app/search/search?q=index=*
