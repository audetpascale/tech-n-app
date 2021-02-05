import { Container } from "theme-ui";
import { graphql, navigate } from "gatsby";
import Layout from "../../components/Layout";
import React from "react";

const ApexCharts =
  typeof window !== `undefined` ? require("react-apexcharts") : null;

const TagsPage = ({ data }) => {
  const series = [
    {
      data: data.allMarkdownRemark.group.map((tag) => ({
        x: tag.fieldValue,
        y: tag.totalCount,
        link: `/tags/${tag.fieldValue}/`,
      })),
    },
  ];

  const options = {
    chart: {
      events: {
        dataPointSelection: function (event, chartContext, opts) {
          navigate(series[0].data[opts.dataPointIndex].link);
        },
      },
    },
  };

  return (
    <Layout title="Étiquette">
      <Container variant="main">
        {ApexCharts && (
          <ApexCharts
            options={options}
            series={series}
            type="treemap"
            height="100%"
          />
        )}
      </Container>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
