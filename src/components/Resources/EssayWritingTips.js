import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoGrid: {
    margin: '20px',
    paddingRight: theme.spacing(8),
  },
  infoList: {
    margin: '15px 0',
  },
}));

export default function EssayWritingTips() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.infoGrid}
      container
      direction='column'
      spacing={3}
      alignItems='center'
      justify='center'
      textAlign='center'
    >
      <Grid item>
        <Typography variant='h4'>
          <b>paula's Essay Writing Tips</b>
        </Typography>
      </Grid>
      <Grid item>
        <ul>
          <li className={classes.infoList}>
            <Typography>
              Choose your first words carefully
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              <b>Show, don’t tell!</b>
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Try not to explicitly say what you or any character is
              feeling. Use imagery or their actions or other stuff to show;
              leave something for the reader to infer.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              That said, a new reader should still be able to easily understand or infer
              the meaning of every sentence.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Don’t be redundant. Every single sentence and every single word
              must be adding new value.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Don’t be overly verbose. The best writers pack the most meaning
              and emotion in the least amount of words.
{' '}
              <strike>Read Hemingway because he's awesome.</strike>
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Vary your diction. This will make it flow better. Try not to use
              the same phrase/word over and over, especially right after each
              other.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Don’t use generalizations or
              flowy words that don’t actually mean anything (well, ok maybe just
              a little bit if it's in your concluding lesson learned or ending
              message thingy).
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>Learn to use em dashes—correctly.</Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Use specific details, imagery, examples, etc to make it more
              personal and emotional. Help the reader imagine they were there.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Specific dialogue (if you can remember?) can also make things more
              personal and emotional.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Sometimes, you want a sentence to PUNCH. Make it short. Make it
              its own paragraph.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              People like dynamic characters, so try to show growth and highlight
              some disparity in perspective or character over time.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Parallelism helps with flow and creates rhythm. Use it to draw out
              similarities. Use it to draw out differences. Use it to make your
              writing beautiful (see? :P).
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Sometimes when writing about your passion, it’s easy to get lost
              in enumerating technical details. Which is great, except your readers 
              are unlikely to already know about [insert your passion] (unless your reader
              is me, and it’s neuroscience :)).
              Prove that you are passionate through your writing. What are your
              feelings about the details of these steps? Why are you so
              interested in this, and what exactly do you find beautiful about this subject or
              these highly technical details?
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Try not to hedge your meaning or use half-effort words/phrases
              like “I think”, “maybe”, etc unless it's necessary for the overall
              effect, or you are talking about something genuinely unknown. Be
              confident.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              The 2nd draft is for creating foreshadow. Go back and add little hints
              and little details and little crumbs to build recurring themes that lead
              up to your ending.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Use the come full circle trick—tie the ending or concluding message back
              to something from the beginning.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              In general, you can always draw inspiration from ideas and
              patterns from other authors/books that you like.

              <strike>Like Hemingway. Seriously, you should read his stuff sometime.</strike>
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Remember that this essay is about YOU. It’s not about listing your
              life events or talents or memories. We care much more about who you
              are as a person—what kind of personality traits are you
              conveying? What is your character and identity? What is your voice?
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Realize that I'm a neuro kid, not an author, and take everything I say with a nice grain of salt :) -paula
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
