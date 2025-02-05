import csv


def maketext():
    inputmapname = 'map.csv'
    outputfilename = 'popups.txt'
    with open(inputmapname, 'r') as current:
        reader = csv.DictReader(current)
        with open(outputfilename, 'w') as out:
            for row in reader:
                print(row)
                content = ''.join(['<br/><b>Location Type:</b>' + row["Location_Type"],
                                   ' <br/><b>Pond Type: </b>', row["Type"],
                                   ' <br/><b>Approximate Size: </b>', row["size"],
                                   ' <br/><b>Surroundings: </b>', row["surrounds"],
                                   ' <br/><b>Wildlife: </b>', row["wildlife_in_or_using"]]
                                  )

                if row["photograph"]:
                    content = content + ' <a target="_blank" alt="Photograph of pond" href="' + row["photograph"] + '">Photograph</a>'
                    out.write(content + '\n')


def main():
    maketext()


if __name__ == "__main__":
    main()
