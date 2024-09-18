export const downloadFile1 = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
  
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
    }, 100);
  };

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const downloadFile2 = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl, { method: 'HEAD' });
  
      if (!response.ok) {
        throw new Error(`File not accessible. Status: ${response.status}`);
      }
  
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
  
      setTimeout(() => {
        link.click();
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Error downloading file:', error.message);
      alert('Failed to download the file. Please try again later.');
    }
  };
  
  export const downloadFile4 = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf', 
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
  