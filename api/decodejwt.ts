type DecodedToken = {
    iat: number;
    exp: number;
}

export const decodeJWT = (token: string): { issuedAt: Date; expiration: Date; isExpired: boolean } => {
    const payloadBase64 = token.split('.')[1]; // Extraer el payload del JWT
    const decodedPayload: DecodedToken = JSON.parse(atob(payloadBase64)); // Decodificar el payload Base64
    
    // Convertir iat y exp a fechas legibles
    const issuedAt = new Date(decodedPayload.iat * 1000); // Convertir a milisegundos
    const expiration = new Date(decodedPayload.exp * 1000); // Convertir a milisegundos
  
    console.log(`Token issued at: ${issuedAt}`);
    console.log(`Token expires at: ${expiration}`);
  
    return {
      issuedAt,
      expiration,
      isExpired: Date.now() > expiration.getTime(), // Verificar si el token ha expirado
    };
  };