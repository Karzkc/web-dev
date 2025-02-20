function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen border">
      Profile Page: {params.id}
    </div>
  );
}

export default ProfilePage;
