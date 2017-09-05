import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import routes from './routes/index';
import api from './routes/api';
const app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public/bundles')));
app.use(cors()); // Use CORS to allow iPad testing when iframed (e.g. Teacher modules)

app.use('/', routes);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    logMissingRouteMessage(req.url);

    // const err = new Error('Not Found');
    // err.status = 404;
    // next(err);

    function logMissingRouteMessage(url) {
        let text = `WARNING - The route ${url} does not exist`;
        let length = text.length;
        let asterisks = repeatString('*', length + 4);
        let blankLine = `* ${repeatString(' ', length)} *`;
        let message = `${asterisks}\n${blankLine}\n* ${text} *\n${blankLine}\n${asterisks}`;

        console.error(message);
    }

    function repeatString(s, n) {
        let repeated = '';

        while (repeated.length < n) {
            repeated += s;
        }

        return repeated;
    }
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
