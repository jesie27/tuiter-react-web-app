const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a class='list-group-item' href="#">
        <i class="fa-solid fa-house float-start"></i>
          <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Home</span></a>    

        <a class="list-group-item bg-primary text-white" href="#"><i class="fa-solid fa-hashtag float-start"></i>
         <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Explore</span></a>
        <a class="list-group-item" href="#"><i class="fa-solid fa-bell float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Notifications</span></a>
        <a class="list-group-item"><i class="fa-solid fa-envelope float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Messages</span></a>
        <a class="list-group-item"><i class="fa-solid fa-bookmark float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Bookmarks</span></a>
        <a class="list-group-item"><i class="fa-solid fa-list-ul float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Lists</span></a>
        <a class="list-group-item"><i class="fa-solid fa-user float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">Profile</span></a>
        <a class="list-group-item"><i class="fa-solid fa-ellipsis float-start"></i>
            <span class="d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-md-block ps-4">More</span></a>            
   </div>
   <div class="d-grid mt-2">
     <a href="#"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;