try {
    Zabbix.log(4, '[ Tubearchivist download webhook ] Started with params: ' + value);

    var 
	params = JSON.parse(value),
        req = new HttpRequest(),
        resp;

    if (params.HTTPProxy) {
        req.setProxy(params.HTTPProxy);
    }
    if (!params.url) {
        throw 'Please provide a tubearchivist url!';
    }
    if (!params.token) {
        throw 'Please provide a tubearchivist token!';
    }

    req.addHeader('Content-Type: application/json');
    req.addHeader('Authorization: Token ' + params.token);

    url = params.url + '/api/task-name/download_pending/';
    resp = req.post(url);

    if (req.getStatus() != 201 && req.getStatus() != 200) {
        throw 'Response code: ' + req.getStatus();
    }

    return 'OK';
}
catch (error) {
    Zabbix.log(4, '[ Tubearchivist download webhook ] Failed to start downloads: ' + error );
    throw 'Failed with error: ' + error;
}
