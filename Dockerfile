FROM nginx:alpine

# 1. Apni saari files copy karo
COPY . /usr/share/nginx/html/

# 2. Hugging Face hamesha port 7860 mangta hai
# Ye command Nginx ki default config ko port 80 se 7860 par badal degi
RUN sed -i 's/listen       80;/listen       7860;/' /etc/nginx/conf.d/default.conf

# 3. Permissions fix (Hugging Face user restrictions ke liye)
RUN chmod -R 777 /usr/share/nginx/html /var/cache/nginx /var/run /var/log/nginx

# 4. Port 7860 expose karo
EXPOSE 7860

# 5. Nginx ko "Foreground" mein chalao taaki Docker exit na kare
CMD ["nginx", "-g", "daemon off;"]