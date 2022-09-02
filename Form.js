// Using  chakraUI

<Center mt={90}>
      <Box
        w="900px"
        p="10"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <Center>
          <Heading
            bgGradient="linear(to-l, #4de4eb, #63bbf0)"
            fontWeight="extrabold"
            bgClip="text"
            pb={10}
          >
            Add Meetup
          </Heading>
        </Center>

        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e);
          }}
        >
          <Text as="b">Heaading</Text>
          <Input
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            borderWidth="2px"
            size="lg"
            borderRadius="lg"
            mb={3}
            placeholder="Enter Heading"
          />

          <Text as="b">Date</Text>
          <Input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            borderWidth="2px"
            size="lg"
            borderRadius="lg"
            mb={3}
            placeholder="Select Date and Time"
            type="date"
          />

          <Text as="b">Address</Text>
          <Input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            borderWidth="2px"
            size="lg"
            borderRadius="lg"
            mb={3}
            placeholder="Add Address"
          />

          <Text as="b">Description</Text>
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={5}
            borderWidth="2px"
            size="lg"
            borderRadius="lg"
            mb={3}
            placeholder="Add Description"
          />

          <Text as="b">Meetup Image</Text>
          <Input
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
            borderWidth="2px"
            w="35%"
            h={7}
            p={0}
            mt={2}
            ml={2}
            type="file"
          />
          {image && <Image width={20} height={20} src={image} alt="" />}

          <Center mt={8}>
            <Button
              justifyContent="center"
              bgGradient="linear(to-l, #63bbf0, #4de4eb)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
              color="white"
              boxShadow="lg"
              borderRadius="50px"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Center>