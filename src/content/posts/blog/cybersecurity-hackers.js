export const post = {
  id: 5,
  slug: "decrypting-diaries-5",
  title:
    "Decrypting Diaries 5: I Used to Think Cybersecurity Was About Hackers",
  excerpt:
    "I used to think cybersecurity was mostly about hackers and flashy exploits, then I learned most of the real work is about trust, access, identity, and the boring controls that keep systems secure.",
  date: "2026-09-17",
  readTime: "5 min",
  tags: ["security", "identity"],
  image: "/api/placeholder/800/400",
  content: `
_by [Manik Singh](/)_

For the longest time, cybersecurity meant hackers to me: Kali Linux open, green text flying, and someone typing at impossible speed in a dark room. Basically Mr. Robot.

My earlier Decrypting Diaries probably made that obvious. I built an encryption tool, studied breaches, and celebrated getting my first root shell on Metasploitable like I had broken into the Pentagon. Cybersecurity felt exciting because of the attack.

But after studying for Security+, working with AWS, and supporting enterprise systems, I started seeing the less glamorous side. A lot of cybersecurity is about trust, access, identity, and configuration. That might be the most important lesson I've learned so far.

## The hacker isn't always the interesting part
When you read about a breach, the attacker gets most of the attention. What vulnerability did they exploit? What malware did they use? How did they get inside?

Those questions still interest me, but enterprise work made me ask different ones. Why was that account allowed to access the system? Why did the authentication request succeed? Why could one machine talk to another? Why did nobody notice the strange activity in the logs?

Cybersecurity is not only about stopping someone at the front door. Sometimes the door works perfectly. The problem is that the wrong person has the key.

## Welcome to enterprise authentication
Working with enterprise technology introduced me to SAML, HTTPS, permissions, logs, databases, integrations, and systems that constantly communicate with one another.

Every time you sign in, several trust decisions happen in the background. One system proves who you are, another checks your permissions, tokens move between services, and certificates are trusted. To the user, it is just a click. Behind the scenes, a small diplomatic summit has taken place.

If one part of that relationship is configured incorrectly, things can go wrong very quickly.

## Security+ gave names to things I was already seeing
Security+ taught me terms like least privilege, defense in depth, authentication, authorization, segmentation, and risk management. Later, I saw those ideas appear in real systems.

Least privilege became more than a definition. It became the question, "Why does this account have permission to do that?" Defense in depth meant accepting that one control will eventually fail and hoping the next controls hold. Authentication versus authorization became simple: the system can know exactly who you are without allowing you to do everything.

## AWS already tried to teach me this
When I built Manik's Encryptor, AWS felt like a maze of EC2 instances, IAM permissions, security groups, and networking settings. I wondered why deploying one Python application required seventeen menus and what felt like a master's degree.

Now I see that cloud platforms are collections of trust decisions. Who can access a resource? Which service can communicate with another? Which ports should be exposed? Which identity can perform an action?

IAM is not just an obstacle between you and deployment. It is one of the most important parts of the environment.

## The boring stuff is usually what saves you
The more I learn about cybersecurity, the less glamorous it becomes. Strong authentication, correct permissions, patching, logging, monitoring, certificates, configuration management, and removing access when someone leaves will never get a Netflix hacking montage.

But when something goes wrong, those are usually the controls everyone wishes they had taken seriously. Sometimes security is simply noticing that Bob still has admin access six months after changing departments.

Sorry Bob.

## I still like the hacking part
I still enjoy Kali Linux, Nmap, vulnerable machines, and the feeling of getting a root shell. But my understanding of security has changed.

Cybersecurity is not just learning how attackers get inside. It is also understanding why systems trust anything at all: a user, a device, an application, a certificate, or another server.

Every connection is someone saying, "Yeah, I know this guy. Let him through." Cybersecurity is making sure that person is not lying.

## Final Thoughts
The last year taught me that cybersecurity is not one job, tool, or certification. It is hidden inside networking, cloud infrastructure, identity, databases, applications, operating systems, and the error log that worked yesterday but refuses to work today.

The hackers are still interesting. These days, I am more interested in the trust that lets them succeed. You stop asking only, "How do I hack this?" and start asking, "Why was this possible in the first place?"

For further insights and more blogs like this, visit [Manik Singh's Portfolio](/) or connect on [LinkedIn](https://linkedin.com/in/manik-singh-62b236298).

Happy Decrypting!
    `,
};
