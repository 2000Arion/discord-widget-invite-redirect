# Simple discord widget invite link API

With this API, you get a link to redirect to the widget's invitelink, even without using the widget.

## Use this API as follows

### Be redirected to the widget invitelink of a server:

[https://discord.arion2000.xyz/api/discord?guildId=[guildId]](https://discord.arion2000.xyz/api/discord "This link will take you to an exemplary redirection that can be performed by the API.")

Don't forget to replace **[guildId]** with the id of the server!

Error messages look like this:

```json
{
    "error": {
    "de":"Fehler beim Abrufen der API: 400 Bad Request",
    "en":"Error retrieving API: 400 Bad Request"
    }
}
```

### Check latency to the API server:

[https://discord.arion2000.xyz/api/ping](https://discord.arion2000.xyz/api/ping "This link will take you to a page that will show you the ping to the api server.")

You can also append `?lang=de` or `?lang=en` to get the latency message in another language.
