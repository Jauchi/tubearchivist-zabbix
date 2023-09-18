# Download script
This script can be combined with triggers to start downloads based on certain criteria.
## Installation
### Create a new script
In Zabbix web, under `Alerts > Scripts`, click `Create script`

* Name should be something you remember, for example `Start tubearchivist downloads`
* Type is `Webhook`
* Parameters
    * `token`: `<your API token>`
    * `url`: `<your API url>`
* In `Script`, you need to paste the contents of `scripts/start_downloads.js`

### Link alerts and script
To ensure that the script gets executed, you must link an trigger to it.

`Alerts > Actions > Trigger actions`, `Create action`

You will get a window with two tabs. Give it a name you will recognize, for example, `Restart tubearchivist downloads`.

In the `Action` tab, set `Conditions` to the triggers you wish to cause a download restart (use `Template` as the `Trigger source` and pick all triggers you want)

In `Operations`, add a Step to run the script when a trigger fires (`Operations`), on the current host.

This is all the setup that is required, now Zabbix ensures that your download queue always gets executed.