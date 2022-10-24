import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Container,
  VStack,
} from "@chakra-ui/react";

const blogsData = [
  {
    title: "What's Next for Tax Competition?",
    tags: ["Tax", "GST"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80",
    content: `The recent agreement on a global minimum tax and other changes to tax rules around the world have called into question the future of tax competition. It is difficult to anticipate how tax competition will ultimately be impacted by these changes, although I seriously doubt that the usefulness of Tax Foundation's International Tax Competitiveness Index will be reduced in any meaningful way.
Instead, the Index may become even more relevant as we enter a new phase of tax competition. The lessons of the Index on neutral, non-distortive tax policies and support for work and business investment will still be there even in the context of a global minimum tax. While there may be less room for competition on corporate tax rates or targeted preferences, that does not prevent tax competition on overall tax system design. As countries continue to seek ways to be attractive for business investment and workers, the global minimum tax could change the way the game is played, but that doesn't mean tax competition is over.
Let's start with what the new tax agreement does. First, it shifts where some large multinationals pay taxes from the location of their production to the jurisdiction of their customers. Second, it lays out a template for a minimum tax that applies to the foreign earnings of companies.
For tax competition and the Index, both pieces are relevant.
Over many years (including recently), academics have suggested that a global tax system that is based on where companies make their sales will likely reduce incentives for individual governments to lower their tax rates to attract profitable investments. If a country only needs the consumers (rather than the investment) to have a tax base, then it becomes less likely that countries will lower corporate tax rates to support inbound foreign direct investment. In fact, a tax system based fully on where consumption occurs would also not tax new investment.
However, the global tax deal is not a pure allocation of taxable profits based on where sales are made. Instead, the reallocation only applies to a subset of profits for around the 100 largest and most profitable companies. Because of that, this part of the tax deal likely will have only limited impacts on governments that may want to reduce taxes on companies to support business expansions.
With respect to the International Tax Competitiveness Index, this part of the global deal could lead to the removal of digital services taxes. If those taxes do ultimately go away, that could improve the scores of the countries that have adopted them.
The global minimum tax also has the potential to work against tax competition and may have an impact on the Index. The minimum effective tax rate of 15 percent is above only a handful of statutory tax rates across the world, but this is not the relevant comparison. Many countries have special tax preferences for research and development, profits from intellectual property, or provide lengthy tax holidays for new business investments. These policies regularly result in low effective tax rates on business profits.
The 15 percent global minimum effective tax rate could encourage countries to reconsider tax policies that lead to very low effective tax rates, or it might lead countries to operate multiple tax systems at one time—one system for domestic companies or small multinationals and a separate system for large multinationals.
Conveniently, we have early (and ongoing) case studies for both models.
Last year, the Italian government put forward legislation that repealed its patent box, which provided a tax rate of 13.9 percent (one-half of the corporate tax rate of 27.8 percent) on income related to patents and software. The legislation also introduced a 190 percent deduction for costs related to research and development. It is unclear how large a role the global minimum tax played in this decision, but the timing is suggestive.
Our other case study is Ireland. It currently has a 12.5 percent statutory corporate tax rate and a patent box with a rate of 6.25 percent and other policies that can result in companies paying low effective rates. In agreeing to the new global minimum tax framework last year, Ireland announced its plans to run essentially a two-tiered tax system. One tier would be based on current rules that will apply to purely domestic Irish companies and small multinationals, while another tier is reserved for large multinationals where the 15 percent minimum effective tax rate would apply. Rather than simplify things, this approach will likely prove complicated.
Of course, everything in international tax is complicated these days.
The United States adopted a new minimum tax this year, but it does not align with the rules agreed upon at the OECD. The U.S. also brought in significant expansions of various tax credits.
With respect to the International Tax Competitiveness Index, the removal of Italy's patent box should help its score, but it will likely take more simplification to move it out of last place. For Ireland and the U.S., it is unclear whether any simplification is on the way.
Even with the change to where companies pay taxes and the global minimum tax, countries will continue to compete for business investment and to be attractive to workers. The global minimum tax does respect business hiring and investment through targeted carveouts. Countries could change their policies that impact real investment (like rules for capital cost recovery) or the taxation of workers (like the tax burden on labor) in response to those carveouts. Reducing the tax burden on capital investment and workers are both pro-growth, and it would be up to governments to consider how to adjust other tax rules to compensate for any fiscal costs of the reforms.
Rather than simply trying to attract intellectual property assets or high-value activities, countries may see the importance of spurring domestic investment in more capital-intensive industries, including those investments that will be necessary to respond to concerns about the changing climate. Countries may also choose to become more attractive to workers who are increasingly mobile in this new era of remote working.
The World Bank and the OECD have recently published papers analyzing how the global minimum tax might change how countries' tax incentives should be designed. Their recommendations are also in line with benefitting real investment and workers' wages.
If that is what the next round of tax competition looks like, the Index will be there to capture it.
The rules of tax competition are changing, but that does not mean the contest is over. It will take time to see how different countries react, but one of the main lessons of the Index is that countries can have principled tax policies while raising sufficient revenue to finance government programs. The Index will continue to show where policymakers are adapting their rules in ways that are narrow, preferential, and distortionary rather than being broadly supportive of work and investment.`,
  },
  {
    title: "GST Payment Online - How to Pay GST Online?",
    tags: ["Tax", "GST"],
    img: "https://media.istockphoto.com/id/1130669886/photo/wooden-letters-gst-and-money-coin-stack-on-red-table-background-financial-concept.jpg?s=612x612&w=0&k=20&c=m8dA4dsHFXSdohM-6EOJ5muD1OcT-eDG735S4yVzbZI=",
    content: `You can make a GST payment either online or offline. Businesses must assess the tax that needs to be paid in cash after the offset of the input tax credit availed. Thereafter, it must generate a GST challan either before or after logging into the GST portal or while filing the GST return.

    This article provides step-by-step instructions to follow for completing the GST payment for all types of taxpayers under GST.`,
  },
];

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://ozgrozer.github.io/100k-faces/0/1/001987.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" fontWeight={"extrabold"}>
        Blogs
      </Heading>
      {blogsData.map((blog) => {
        return (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={blog.img}
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={"radial(orange.600 1px, transparent 1px)"}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={blog.tags} />
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {blog.title}
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                noOfLines={4}
                color={"gray.400"}
                fontSize="lg"
              >
                {blog.content}
              </Text>
              <BlogAuthor
                name="Sameer Kumar"
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};
export default ArticleList;
