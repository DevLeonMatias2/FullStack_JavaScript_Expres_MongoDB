const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    console.log(req);
    //crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        await res.json({mensaje: 'El cliente se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

};

   // Obtiene todos los pacientes
exports.obtenerPacientes = async (req,res,next) => {
    try {
        const pacientes = await Paciente.find({});
        await res.json(pacientes);
    }catch (error) {
        console.log(error);
        next();

    }
};

// Obtener un paciente en especifico por su ID
exports.obtenerPaciente = async (req,res,next)=>{
 try {
   const paciente = await Paciente.findById(req.params.id);
   await res.json(paciente);
 }catch (error) {
     console.log(error);
     next();
 }
};
// Actualizar un registro  por su ID

exports.actualizarPaciente = async(req,res,next)=>{
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body,{
            new:true
        });
        await res.json(paciente);
    }catch (error) {
        console.log(error);
        next();

    }

};
// Elimina un paciente por su ID
exports.eliminarPaciente = async (req,res,next)=>{
    try {
        await  Paciente.findOneAndDelete({_id: req.params.id});
        await res.json({mensaje: 'El paciente fue eliminado'})
    }catch (error) {
        console.log(error);
        next();

    }
};

