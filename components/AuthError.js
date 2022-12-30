
export const AuthError = ({t}) => {
  return (
    <div>
        <h5 className="auth-error" data-testid='heading'>
          {t.error1}
        </h5>
        <h5 className="auth-error">
          {t.error2}
        </h5>
    </div>
  )
}
