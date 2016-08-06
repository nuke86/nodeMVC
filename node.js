/*
Copyright 2016 Dario Fadda - nuke@spcnet.it.
This file is part of nodeMVC.

    nodeMVC is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    nodeMVC is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with nodeMVC.  If not, see <http://www.gnu.org/licenses/>.
*/

var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
path = require("path");

app.set('view engine', 'ejs');

app.use(express.static('views'), function(req, res){
	var tpl = req.path;
	if (tpl === '/'){
		tpl = 'index';
	} else {
		arr = tpl.split("/");
		tpl = arr[1];
	}
	app.get(req.path);
	res.render(tpl);
});

app.listen(port);
