import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.contact_border};
  border-radius: ${p => p.theme.radii.sm};

  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  p {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
