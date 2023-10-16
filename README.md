# Simple Discord Widget Invite Link API

With this API you can get a link to redirect to the widget's invitelink, even without using the widget.

## Use this API like this

### Be redirected to a server's widget invitelink:

[https://discord.arion2000.xyz/api/discord?guildId=[guildId]](https://discord.arion2000.xyz/api/discord "This link will take you to an example redirect that can be performed using the API.")

Don't forget to replace **[guildId]** with the server id!

Error messages will look like this

```json
{
    "error": {
    "de":"Failed to retrieve API: 400 Bad Request",
    "en":"Error retrieving API: 400 Bad Request"
    }
}
```

### Check the latency to the API server:

[https://discord.arion2000.xyz/api/ping](https://discord.arion2000.xyz/api/ping "This link will take you to a page that will show you the ping to the API server.")

You can also add `?lang=de' or `?lang=en' to get the latency message in another language.
