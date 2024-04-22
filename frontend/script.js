let baseURL = "http://127.0.0.1:5500/fake-api/db.json";

let modal = document.getElementById("myModal");
let close = document.querySelector('.x')
let userborder = document.querySelectorAll('.user-avatar')

userborder.forEach((item, index) => {
  item.addEventListener("click", function() {
    userborder.forEach(item => {
      if (item.style.border !== "2px solid gray") {
      }
    });
    this.style.border = "2px solid gray";
    openModal(data.users[index]);
  });
});

function openModal(element) {
  modal.style.display = "flex";
    setTimeout(closeModal, 15000);
  }
  
  function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

close.onclick = () => {
  modal.style.display = "none";
}




let elements = document.querySelectorAll(".name-need");
let avatars = document.querySelectorAll("#avatarImg");
let names = document.querySelectorAll(".name");
let avatarsNew = document.querySelectorAll(".avatarImgNew");
let countryCity = document.querySelectorAll(".country");
let imgstories = document.querySelectorAll(".imgstories");
let likescount = document.querySelectorAll(".likes")
let coms1 = document.querySelectorAll(".coms")
let nickcom = document.querySelectorAll(".txt")
let desc = document.querySelectorAll(".com1")
let postimg = document.querySelectorAll("#posts")
let div = document.querySelectorAll('.nameandcountry')



fetch(baseURL)
.then(response => response.json())
.then(data => {

  div.forEach((iro2, index) => {
    iro2.onclick = () => {
      window.location.href = 'pages/profile'
    }
  })

    elements.forEach((element, index) => {
      element.textContent = data.users[index].username;
    });
    
    
    postimg.forEach((photos, index) => {
      photos.setAttribute('src', data.users[index].post.photos)
    });
    
    
    avatarsNew.forEach((avtar, index) => {
      avtar.style.borderRadius = '50px'
      avtar.setAttribute('src', data.users[index].userImg)
    });
    
    names.forEach((name, index) => {
      name.textContent = data.users[index].name;
    });

    
    countryCity.forEach((elem, index) => {
      elem.textContent = data.users[index].countryCity;
    });
    
    imgstories.forEach((imgs, index) => {
      imgs.setAttribute('src', data.users[index].stories)
    });
    
    desc.forEach((comm, index) => {
      comm.textContent = data.users[index].post.description;
    });
    
    avatars.forEach((avtar, index) => {
      avtar.setAttribute('src', data.users[index].userImg)
    });
    
    likescount.forEach((like, index) =>{
      like.textContent = data.users[index].post.likes + ' ' + 'likes';
    })
    
    coms1.forEach((com, index) => {
      com.textContent = "View all " + data.users[index].post.comments + " comments";
    })
    
    nickcom.forEach((eli99,index) => {
      eli99.textContent = data.users[index].name + " " + ": " + "when you put new videos in hub";
    })
  })
  .catch(error => console.error('Ошибка загрузки данных из базы данных:', error));
  
  document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");
    let slider = document.querySelector('.slider');
    let blockst = document.querySelector('.story-block')
    let gg2 = document.querySelectorAll('.post')
    let p = document.querySelectorAll('.name-need')
    let inp1 = document.querySelector('.search-inp')
    const commentInputs = document.querySelectorAll('.comment');
    let logo2 = document.querySelector('#logo2')
    let profileLink = document.querySelectorAll('#profile1')
    
    if (!theme || theme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      blockst.style.backgroundColor = 'white'
      blockst.style.color = '#000'
      blockst.style.border = '1px solid white'
      inp1.style.backgroundColor = "white"                
      inp1.style.color = 'black'
      inp1.style.border = '1px solid white'
      logo2.setAttribute("src", "./vite-project/public/img/Logo.svg")
      nickcom.forEach((eli1,index)=> {
        eli1.style.color = "black"
      })
      profileLink.forEach((li9,index) => {
        li9.style.color = "black"
      })
      gg2.forEach((gg1,index) => {
        gg1.style.backgroundColor = 'white'
        gg1.style.color = 'black'
        gg1.style.border = '1px solid white'
      });
      desc.forEach((commy, index) => {
        commy.style.color ="black"
      });
      elements.forEach((elle, index) => {
        elle.style.color = "black"
      })
      countryCity.forEach((elem, index) => {
        elem.style.color = "black"
      });
      names.forEach((name, index) => {
        name.style.color = "black"
      });
      likescount.forEach((cou,index) => {
        cou.style.color= "black"
      })
      commentInputs.forEach(input => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.border = 'white';
    });
      
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      blockst.style.backgroundColor = 'black'
      blockst.style.color = 'white'
      blockst.style.border = '1px solid black'
      inp1.style.backgroundColor = "black"                
      inp1.style.color = 'white'
      inp1.style.border = '1px solid black'
      logo2.setAttribute("src", "./vite-project/public/img/instagram white logo.png")
      nickcom.forEach((eli1,index)=> {
        eli1.style.color = "white"
      })
      profileLink.forEach((li9,index) => {
        li9.style.color = "white"
      })
      gg2.forEach((gg1,index) => {
        gg1.style.backgroundColor = 'black'
        gg1.style.color = 'white'
        gg1.style.border = '1px solid black'
      })
      countryCity.forEach((elem, index) => {
        elem.style.color = "white"
      });
      desc.forEach((commy, index) => {
        commy.style.color ="white"
      });
      names.forEach((name, index) => {
        name.style.color = "white"
      });
      likescount.forEach((cou,index) => {
        cou.style.color= "white"
      })
      elements.forEach((elle, index) => {
        elle.style.color = "white"
      });
      commentInputs.forEach(input => {
        input.style.backgroundColor = 'black';
        input.style.color = 'white';
        input.style.border = '1px solid black'
    });
    }
  
    slider.onclick = () => {
      if (theme === "dark") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        blockst.style.backgroundColor = 'white'
        blockst.style.color = '#000'
        blockst.style.border = '1px solid white'
        inp1.style.backgroundColor = "white"                
        inp1.style.color = 'black'
        inp1.style.border = '1px solid white'
        logo2.setAttribute("src", "./vite-project/public/img/Logo.svg")
        nickcom.forEach((eli1,index)=> {
          eli1.style.color = "black"
        })
        profileLink.forEach((li9,index) => {
          li9.style.color = "black"
        })
        gg2.forEach((gg1,index) => {
          gg1.style.backgroundColor = 'white'
          gg1.style.color = 'black'
          gg1.style.border = '1px solid white'
        });
        desc.forEach((commy, index) => {
          commy.style.color ="black"
        });
      countryCity.forEach((elem, index) => {
        elem.style.color = "black"
      });
      names.forEach((name, index) => {
        name.style.color = "black"
      });
      likescount.forEach((cou,index) => {
        cou.style.color= "black"
      });
      elements.forEach((elle, index) => {
        elle.style.color = "black"
      });
      commentInputs.forEach(input => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.border = 'black';
    });
        localStorage.setItem("theme", "light");
        theme = "light";
      } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        blockst.style.backgroundColor = 'black'
        blockst.style.color = 'white'
      blockst.style.border = '1px solid black'
      inp1.style.backgroundColor = "black"                
      inp1.style.color = 'white'
      inp1.style.border = '1px solid black'
      logo2.setAttribute("src", "./vite-project/public/img/instagram white logo.png")
      nickcom.forEach((eli1,index)=> {
        eli1.style.color = "white"
      })
      profileLink.forEach((li9,index) => {
        li9.style.color = "white"
      })
      gg2.forEach((gg1,index) => {
        gg1.style.backgroundColor = 'black'
        gg1.style.color = 'white'
        gg1.style.border = '1px solid black'
      })
      desc.forEach((commy, index) => {
        commy.style.color ="white"
      });
      countryCity.forEach((elem, index) => {
        elem.style.color = "white"
      });
      names.forEach((name, index) => {
        name.style.color = "white"
      });
      likescount.forEach((cou,index) => {
        cou.style.color= "white"
      });
      elements.forEach((elle, index) => {
        elle.style.color = "white"
      })
      commentInputs.forEach(input => {
        input.style.backgroundColor = 'black';
        input.style.color = 'white';
        input.style.border = 'white';
    });
        localStorage.setItem("theme", "dark");
        theme = "dark";
      }
    };
  });