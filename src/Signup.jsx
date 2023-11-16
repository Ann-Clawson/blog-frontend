export function Signup() {
  return (
    <div id="signup">
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Confirm Password: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}
