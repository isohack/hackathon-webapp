import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { SocialIcon } from 'react-social-icons';

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        isohack.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

  );
}

const useStyles = makeStyles(theme => ({

  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div class="row">

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="h2" align='center'>ISOHack</Typography>
          <Typography variant="body1" align='center'>This Season Hack for a Reason.</Typography>
          <Typography variant="body2" align='center'>Have any Questions?</Typography>
          <Typography variant="body2" align='center'>isohack.atc@gmail.com</Typography>
          <div align='center' >
            <SocialIcon url="https://www.linkedin.com/in/piyush-manglani-3122a3143/" style={{ height: 25, width: 25 }} />
            <SocialIcon url="https://github.com/isohack/hackathon-webapp" style={{ height: 25, width: 25 }} />
            <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25 }} />
            <SocialIcon url="http://instagram.com" style={{ height: 25, width: 25 }} />
          </div>
          <Copyright />
        </Container>

      </footer>

    </div >
  );
}