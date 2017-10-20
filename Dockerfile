FROM node:8.6.0

RUN mkdir -p /opt/app
WORKDIR /opt/app

EXPOSE 3333
EXPOSE 35729

# custom entrypoint
COPY ./entrypoint.sh /
RUN chmod 777 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
