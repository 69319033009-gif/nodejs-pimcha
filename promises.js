const checkWeather = new Promise((resolve, reject) => {
    const weather = 'sunny'; // ตัวอย่างสภาพอากาศ
    setTimeout(() => {
        if (weather === 'sunny') {
            resolve('วันนี้แดดจัด!');
        } else {
            reject('วันนี้ไม่มีแดด');
        }
}, 3000);
});
const ReadFile = new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            reject('เกิดข้อผิดพลาดในการอ่านไฟล์: ' + err);
        } else {
            resolve(data);
        }
    });
});
//checkWeather
    //.then((result) => {
        // block นี้จะทำงานถ้า Promise ถูก resolve
        //console.log(result);
    //})
    //.catch((error) => {
        // block นี้จะทำงานถ้า Promise ถูก reject
        //console.error(error);
    //})
    //.finally(() => {
        // block นี้จะทำงานเสมอ ไม่ว่าจะสำเร็จหรือล้มเหลว (ทางเลือก)
       // console.log("ตรวจสอบสภาพอากาศเสร็จสิ้น");
    //});
    //ReadFile
    //.then((data) => {
        // block นี้จะทำงานถ้า Promise ถูก resolve
       // console.log('เนื้อหาของไฟล์:', data);
    //})
    //.catch((error) => {
        // block นี้จะทำงานถ้า Promise ถูก reject
        //console.error(error);
    //})
    //.finally(() => {
        // block นี้จะทำงานเสมอ ไม่ว่าจะสำเร็จหรือล้มเหลว (ทางเลือก)
        // console.log("การอ่านไฟล์เสร็จสิ้น");
    //});
async function planTrip() {
    try {
        const weatherResult = await checkWeather;
        console.log(weatherResult);

        const fileData = await ReadFile;
        console.log('เนื้อหาของไฟล์:', fileData);
    } catch (error) {
        console.error(error);
    }
}
planTrip();
