FROM node:12

# SET TIME ZONE AND LOCAL TIME
RUN echo "Asia/Jakarta" > /etc/timezone
RUN ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN dpkg-reconfigure -f noninteractive tzdata
# END SET TIME ZONE AND LOCAL TIME

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["node", "rest.js"]

EXPOSE 8080