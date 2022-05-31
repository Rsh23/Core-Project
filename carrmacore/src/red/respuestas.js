exports.success = function(req,res,mensaje,status){
    const statuscode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(statuscode).send({

        error: false,
        status: statuscode,
        body:mensajeOk

    });

}

exports.error = function(req,res,mensaje,status){
    const statuscode = status || 500;
    const mensajeError = mensaje || 'Error interno';
    res.status(statuscode).send({

        error: true,
        status: statuscode,
        body:mensajeError

    });

}