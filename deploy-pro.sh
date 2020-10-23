npm run build

ssh root@192.168.102.210 "mv /home/aiis/mcc-home /home/aiis/mcc-home_$(date +'%Y%m%d%H%M%S')"

scp -r ./dist/ root@192.168.102.210:/home/aiis/mcc-home/
