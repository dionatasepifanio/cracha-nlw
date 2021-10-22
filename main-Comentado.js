// links das redes
const LinksSocialMedia = {
  github: 'dionatasepifanio',
  youtube: 'UCBaDuRZmJyw2WnckTVI2xdw',
  facebook: 'dionatasepifanio',
  instagram: 'dionataseduardo',
  twitter: 'dionatasepifan'
}

function changeSocialMediaLinks() {
  /* pegue um elemendo a  partir da ID 

  -> document.getElementById('userName').textContent = 'Jonatas'
  
  Js com id consegue identificar automaticamente que se tranta 
  de um id presente em algum algum lugar do documento, assim a linha a baixo faz exatamente a mesma cois aque a linha acima 

  -> userName.textContent = 'é nois' */

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGitHub.href = data.html_url
      imgAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
