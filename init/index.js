const mongoose=require("mongoose");4
const intiData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";

main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB= async()=>{
    await Listing.deleteMany({});
    intiData.data=intiData.data.map((obj)=>({
        ...obj,
        owner:'66f13fd2e71bea2609989520'
    }))
    await Listing.insertMany(intiData.data);

    console.log("intialized data was saved");
};

initDB();
