 

const Main = () => { 
  return (
    <div className="main">
      <div className="slogan">
        <h1>Skyrocket Your</h1>
        <h1 className="alt-color">Organic Traffic</h1>
        <p>Boost your search engine optimization with ease.</p>
        <div class="c-formContainer">
  <form class="c-form" action="">
    <input class="c-form__input" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="" />
    <label class="c-form__buttonLabel" for="checkbox">
      <button class="c-form__button" type="button">Send</button>
    </label>
    <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
  </form>
</div>
      </div>
    </div>
  );
}

export default Main;