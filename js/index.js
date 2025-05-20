//select active page in navbar

const links=document.querySelectorAll("nav a");
const current=window.location.pathname.split("/").pop();

links.forEach(link=>{
  if(link.getAttribute("href")===current)
  {
    link.classList.add("text-orange-500");
  }
  else{
    link.classList.remove("text-orange-500")
  }
})
///menu toggle
const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
    
document.addEventListener("DOMContentLoaded",()=>{
    const users = [
        { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
        { name: "Alice Johnson", email: "alice@example.com", role: "Viewer", status: "Active" },
        { name: "Mike Davis", email: "mike@example.com", role: "Admin", status: "Inactive" },
      ];
      const tbody=document.getElementById("table-body");
      users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.style.backgroundColor=index%2===0?"bg-white":"bg-gray-50";
        row.classList.add("hover:bg-blue-200");
       if(index%2===0) row.classList.add("bg-gray-100")
        if(index%2!==0) row.classList.add("bg-white")
            row.classList.add("border-b", "border-blue-100");

        row.innerHTML=`
         <td class=" px-3 py-6 ">${user.name}</td>
              <td class=" px-3 py-6 ">${user.email}</td>
              <td class=" px-3 py-6 ">${user.role}</td>
              <td class=" px-3 py-6 ">${user.status}</td>
        `;
        tbody.appendChild(row);
      })
})