import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="head_text text-left">
        <span className="orange_gradient text-center">{name} Profile</span>
      </h1>
      <p className="desc text-left"></p>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard 
            key={post._id}
            post={post}
            handleDelete={() => handleDelete && handleDelete(post)}
            handleEdit={() => handleEdit && handleEdit(post)}
          />
        ))}
    </div>
    </section>
  )
}

export default Profile