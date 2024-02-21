function SingleFrnd({ bondhu }) {
  const { name, email } = bondhu;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
export default SingleFrnd;
