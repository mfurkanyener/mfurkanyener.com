import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  color: white;
`;

export const Section = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 50px auto;
  padding: 40px 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #f4a261;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  min-height: 120px;
`;

export const Button = styled.button`
  background: #f4a261;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background: #e76f51;
    transform: scale(1.05);
  }
`;