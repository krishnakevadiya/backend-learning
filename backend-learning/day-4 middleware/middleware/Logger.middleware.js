

const routerblogger=(req,res,next)=>{
    const starttime=new Date().getTime()
next()
const endtime=new Date().getTime()
fs.appendFileSync("./routedetailes.tex",`Route visited:${req.url}|Method:${req.method} |responsetime:${endtime-starttime}ms\n` )
}

module.exports={
    routerblogger
}