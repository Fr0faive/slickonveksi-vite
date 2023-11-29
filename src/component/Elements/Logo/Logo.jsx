const Logo = (props) => {
  const { size } = props;
  return (
    <img className={`${size}`} src="/assets/logo.png" alt="slickonveksi" />
  );
};

export default Logo;
