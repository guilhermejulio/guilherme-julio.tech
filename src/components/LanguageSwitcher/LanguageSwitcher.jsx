import React from 'react';
import { styled } from '@stitches/react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import '../../../node_modules/flag-icons/css/flag-icons.min.css';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '#fff',
  borderRadius: 4,
  boxShadow: `0 4px 10px 0 rgba(0, 0, 0, 0.1)`,
  margin: '2rem 2rem 0 0',
  position: 'fixed',
  right: 0,
  zIndex: 100,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  color: 'black',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&[data-state=on]': { backgroundColor: 'rgb(86, 3, 173, 1)', color: 'white' },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;

const LanguageSwitcher = () => {
  const {languages, originalPath, language} = useI18next();
  console.log(languages);

  return (
    <ToggleGroup type="single" defaultValue={language} aria-label="Text alignment">
      <ToggleGroupItem value="pt" aria-label="Left aligned">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <span className="fi fi-br" />
        </Link>
      </ToggleGroupItem>
      <ToggleGroupItem value="en" aria-label="Center aligned">
        <Link
          to={originalPath}
          language={languages[1]}
          style={{
            textDecoration: `none`,
          }}
        >
          <span className="fi fi-gb" />
        </Link>
      </ToggleGroupItem>
      <ToggleGroupItem value="es" aria-label="Right aligned">
        <Link
          to={originalPath}
          language={languages[2]}
          style={{
            textDecoration: `none`,
          }}
        >
          <span className="fi fi-es" />
        </Link>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default LanguageSwitcher;
