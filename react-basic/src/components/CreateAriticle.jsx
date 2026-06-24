function CreateArticle({onSubmit}) {
  return (
    <>
      <h2>Create Article</h2>
      <form action="" 
      onSubmit={e=>{
        e.preventDefault();
        onSubmit(e.target.title.value, e.target.desc.value, e.target.diffculty.value)
      }}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">diffculty</label>
          <input name="difficulty" min="0" max="5" type="number" id="diffculty"/>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;