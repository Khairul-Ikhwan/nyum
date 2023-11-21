import Layout from "../../layouts/userTypes/Layout";

export default function UploadStoreLogos() {
  const handleImageSubmit = async () => {
    try {
      const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];

      if (!file) {
        alert("Please select an image");
        return;
      }

      const formData = new FormData();
      formData.append("imgfile", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully");
      } else {
        alert("Error uploading image");
      }
    } catch (error) {
      console.error("Error uploading image", error);
      alert("Error uploading image");
    }
  };

  return (
    <Layout>
      <h1>This is where we upload store logos</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="file" name="storeLogo" accept="image" />
        <button onClick={handleImageSubmit}>Submit</button>
      </div>
    </Layout>
  );
}
