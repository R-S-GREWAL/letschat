
function logout() {
      localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }
    {
     
      console.log(name);
    
      localStorage.setItem("room_name", name);    
    }
    function addRoom() {
      localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";    
      }