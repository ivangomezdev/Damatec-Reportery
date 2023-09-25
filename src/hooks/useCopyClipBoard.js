
export const copyData = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Texto copiado al portapapeles');
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };
