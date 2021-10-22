// links das redes
const LinksSocialMedia = {
  github: 'dionatasepifanio',
  youtube: 'UCBaDuRZmJyw2WnckTVI2xdw',
  facebook: 'dionatasepifanio',
  instagram: 'dionataseduardo',
  twitter: 'dionatasepifan'
}
/* Função para buscar e alterar o link das redes socias*/
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/* Aqui estou importando as infos da API do GitHub e utilizandoas nos campos correspondentes na minha aplicação*/
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
