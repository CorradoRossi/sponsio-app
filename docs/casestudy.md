# Case Study: Sponsio

Sponsio is a forum and link sharing community for people recovering from and affected by addiction.

The idea originated with a close friend of mine who works with NGO's in Maine to combat addiction, who wanted a modern user friendly social hub like Reddit, but tailored to their community.

I decided to take the opportunity to test my ability to create a fullstack solution from stem to stern.

### Planning 

The app needed a number of features.
- the ability to create posts and comment on them
- the ability to share links
- persistent database storage 
- User profiles
- email newsletter 

### Technology stack

After considering the options I chose to use a battle tested stack that relied on the Meteor framework. A React frontend with a Mongodb and Graphql database and query language were the natural selection.

### The Elevator Pitch

For this project I implemented a traditional signup/login method as well as Oauth.
- Twitter and Facebook Oauth login which dynamically populates user Avatar.
- Shared urls autopopulate link details including image, tagline, etc using Embedly.
- Pagination

### Backend

Using Meteor makes deployment convenient. I spun up and configured a Digitalocean droplet and set up SSH port forwarding. I purchased the domain name from my registrar of choice and pointed it to the Digitalocean nameservers then configured the namespace and DNS records (making sure to provide for both IPV4 and IPV6 IP tables). I then used a Letsencrypt wildcard certificate to cover all permutations of the root domain. The app runs on a Docker instance using Node.js and Express for the server, so I implemented an Nginx reverse proxy to isolate internal app and Mongodb traffic from web traffic. I set up a secondary firewall to allow external communication from ports 80 and 443 only, as well as 22 for general SSH and redployment. If high traffic became an issue, the compartmentalized structure would make it significantly easier to scale by  provisioning extra servers, enabling load balancing, and isolating the Mongo database on it's own set of redundant servers.  