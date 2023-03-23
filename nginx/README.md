# NGINX configuration

NGINX allows us to make proxy calls from the internet to our services (Reverse proxy). This tool saves all it's files inside the folder `/etc/nginx`.

To configure nginx in any server you need to:

1. Install it in the first place.
2. Unlink the default page on `/etc/nginx/sites-enabled/default`
3. 

Then you need to unlink the default page:

```
sudo unlink /etc/nginx/sites-enabled/default
```

Finally you need to copy the file `api.conf` to the `/etc/nginx/sites-enabled/` folder.

```
sudo cp /repo/nginx/api.conf /etc/nginx/sites-enabled/
```

Finally, you can test nginx and restart it when it shows no errors.

```
sudo nginx -t
sudo systemctl restart nginx
```

---

*Disclaimer: To view logs in case of an error in nginx you need to use the command `sudo systemctl status nginx.service`.