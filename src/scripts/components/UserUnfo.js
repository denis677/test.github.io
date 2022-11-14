

export default class UserUnfo {
  constructor(title, subtitle){
    this.title = title;
    this.subtitle = subtitle;
  }

  getUserInfo() {
    const userInfo = {
      name: this.title.textContent,
      about: this.subtitle.textContent
    }

    return userInfo;
  }

  setUserInfo(newUser) {
    this.title.textContent = newUser.name;
    this.subtitle.textContent = newUser.about;
  }
}