function DynamicComponent(){
    let name="Kamlesh Singh";
    function personalInfo(params) {
        let age=22;
        let phoneNo="9368392516"
        let gmail="kamleshsingh0198@gmail.com";
        return `Age : ${age} 
        Phone No. : ${phoneNo} 
         gmail : ${gmail}`;
       

    }
    return <p>{personalInfo()}</p>
}
export default DynamicComponent