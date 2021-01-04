import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoGrid: {
    margin: '20px',
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
          <b>Essay Writing Tips</b>
        </Typography>
      </Grid>
      <Grid item>
        <ul>
          <li className={classes.infoList}>
            <Typography>
              In writing, your first couple words have a disproportionate amount
              of influence.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              One common trick is starting with "I" to immediately give a more
              personal nuance. Imagine you’re casually telling this story to a
              friend while they’re sitting next to you.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              <b>Show, don’t tell!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</b>
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Almost NEVER explicitly tell me what you or any character is
              feeling. Use imagery or their actions or other stuff to SHOW me.
              Don’t just do all the work and force feed everything to the
              reader; leave some for the reader to infer.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              That said, there's a delicate balance between subtlety and
              clarity. A new reader should still be able to understand or infer
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
              <strike>Read Hemingway.</strike>
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
              You're not running for president, so don’t use generalizations or
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
              People like dynamic characters; show growth and highlight
              disparity in perspective over time. Static narrators are boring.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Watch your tone and mood. If the surrounding sentences are
              creating a certain feeling, make sure sentences in between match
              and aren’t jarring. Otherwise your reader will lose that “sucked
              in” feeling. You need to make sure your reader stays “sucked in”
              the whole way through.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Parallelism helps with flow and creates rhythm. Use it to draw out
              similarities. Use it to draw out differences. Use it to make your
              writing beautiful (see what i did there? :P).
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Sometimes when writing about your passion, it’s easy to get lost
              in enumerating technical details. Which is great, except I don’t
              care about [insert your passion] (unless it’s neuroscience :)).
              Prove to me that you are passionate about this. What are your
              feelings about the details of these steps? Why are you so
              interested in and what do you find beautiful about this subject or
              these highly technical details? Make the reader fall in love with
              [insert your passion].
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Try not to hedge your meaning or use half-effort words/phrases
              like “I think”, “maybe”, etc unless it's necessary for the overall
              effect or you are talking about something genuinely unknown. Be
              confident.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              The 2nd draft is for creating foreshadow. Go back and add hints
              and details and little crumbs to build recurring themes that lead
              up to your ending.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Come full circle trick—tie the ending or concluding message back
              to something from the beginning. This is a cheap way to leave the
              reader with that nice cathartic feeling.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              In general, you can always draw inspiration from ideas and
              patterns from other authors/books that you like. Combine them to
              develop your own writing style and distinctive voice.
            </Typography>
          </li>
          <li className={classes.infoList}>
            <Typography>
              Remember that this essay is about YOU. It’s not about listing your
              life events or talents or memories. I care much more about who you
              are as a person—what kind of personality traits are you trying to
              convey? What is your character and identity? What is your voice?
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
